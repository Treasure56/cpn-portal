"use server";

import { formDataToObject } from "@/functions/helpers";
import { ActionResponse, ApiResponse } from "@/types/basicTypes";
import { apis, tags, validators } from "@/utils";
import { ServerRequest } from "@/utils/serverRequest";
import { revalidateTag } from "next/cache";
import { z } from "zod";

const schema = z.object({
  amount: z.string(),
  payment_plan_id: validators.min3,
  message: z.string(),
  disclaimer: z.string(),
  studentId: z.string(),
  due_date: z.string(),
});
type FormType = z.infer<typeof schema>;

export async function createInvoice(
  _: ActionResponse,
  formData: FormData
): Promise<ActionResponse> {
  const data = formDataToObject<FormType>(formData);
  const validate = schema.safeParse(data);
  //check if validation was successful
  if (!validate.success)
    return {
      fieldErrors: validate.error.flatten().fieldErrors,
      error: "fix errors and try again",
    };
  // data.courses = JSON.parse(data.courses);

  try {
    console.log(data);

    const req = await ServerRequest.post(apis.manager.createInvoice, data);
    const res: ApiResponse = await req?.json();
    console.log({ res });
    if (res.status == 201) {
      revalidateTag(tags.invoice);
      return { success: "Invoice created" };
    } else {
      return { error: res.data };
    }
  } catch (error) {
    console.error(error);
    return { error: "Something went wrong" };
  }

  return {};
}
