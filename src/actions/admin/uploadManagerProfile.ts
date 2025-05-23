"use server";

import { ActionResponse, ApiResponse } from "@/types/basicTypes";
import { apis, tags } from "@/utils";
import { ServerRequest } from "@/utils/serverRequest";
import { revalidateTag } from "next/cache";

export async function uploadManagerProfile(
  _: ActionResponse,
  formData: FormData
): Promise<ActionResponse> {
  try {
    const managerId = formData.get("managerId") as string;
    const req = await ServerRequest.postFile(
      apis.admin.uploadManagerProfile(managerId),
      formData
    );

    const res: ApiResponse = await req?.json();
    console.log(4);
    if (res.status == 200) {
      revalidateTag(tags.manager);
      return { success: "Image uploaded" };
    } else {
      return { error: res.data };
    }
  } catch (error) {
    console.error(error);
    return { error: "Something went wrong" };
  }

  return {};
}
