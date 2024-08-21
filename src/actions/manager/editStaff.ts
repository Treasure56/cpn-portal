"use server";

import { formDataToObject } from "@/functions/helpers";
import { ActionResponse, ApiResponse } from "@/types/basicTypes";
import { apis, tags, validators } from "@/utils";
import { ServerRequest } from "@/utils/serverRequest";
import { log } from "console";
import { revalidateTag } from "next/cache";
import { z } from "zod";

const schema = z.object({
  fullname: validators.min3,
  email: validators.min3,
  phone: validators.phone,
  courses: z.string(),
  salary: validators.min3,
  staffId: z.string()
});

type FormType = z.infer<typeof schema>;

export async function editStaff(
  _: ActionResponse,
  formData: FormData
): Promise<ActionResponse> {
  const data = formDataToObject<FormType>(formData);
  console.log(data);
  const validate = schema.safeParse(data);
  //check if validation was successful
  if (!validate.success)
    return {
      fieldErrors: validate.error.flatten().fieldErrors,
      error: "fix errors and try again",
    };

  try {
    data.courses = JSON.parse(data.courses)
    
    const req = await ServerRequest.patch(
      apis.manager.editStaff(data.staffId),
      data
    );
    const res: ApiResponse = await req?.json();
    console.log({ res });
    if (res.status == 200) {
      revalidateTag(tags.student);
      return { success: "staff updated" };
    } else {
      return { error: res.data };
    }
  } catch (error) {
    console.error(error);
    return { error: "Something went wrong" };
  }

  return {};
}
