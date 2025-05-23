"use server";

import { ActionResponse, ApiResponse } from "@/types/basicTypes";
import { apis, tags } from "@/utils";
import { ServerRequest } from "@/utils/serverRequest";
import { revalidateTag } from "next/cache";

export async function adminUploadCert(
  _: ActionResponse,
  formData: FormData
): Promise<ActionResponse> {
  try {
    const managerId = formData.get("managerId") as string;
    const req = await ServerRequest.postFile(
      apis.admin.uploadManagerCert(managerId),
      formData
    );
    const res: ApiResponse = await req?.json();
    if (res.status == 200) {
      revalidateTag(tags.manager);
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
