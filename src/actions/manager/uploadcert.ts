"use server";

import { ActionResponse, ApiResponse } from "@/types/basicTypes";
import { apis, tags } from "@/utils";
import { ServerRequest } from "@/utils/serverRequest";
import { revalidateTag } from "next/cache";

export async function uploadCert(
  _: ActionResponse,
  formData: FormData
): Promise<ActionResponse> {
  try {
    // console.log(data);
    // console.log(1);
    const staffId = formData.get("staffId") as string;
    // console.log(2);
    const req = await ServerRequest.postFile(
      apis.manager.uploadCert(staffId),
      formData
      // {
      //   headers: {
      //     "Content-Type": "multipart/form-data",
      //   },
      // }
    );
    // console.log(3);
    // console.log(await req?.text());
    const res: ApiResponse = await req?.json();
    // console.log(4);
    if (res.status == 200) {
      revalidateTag(tags.staff);
      return { success: "Certificate uploaded" };
    } else {
      return { error: res.data };
    }
  } catch (error) {
    console.error(error);
    return { error: "Something went wrong" };
  }

  return {};
}
