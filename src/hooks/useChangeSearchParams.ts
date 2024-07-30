import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { useCallback } from "react";

export type AppJson = {[key:string]:string};

export function useChangeSearchParams(path:string|undefined = undefined) {
  const params = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  // const params = useParams();

  const createQueryString = useCallback(
    (obj: AppJson) => {
      const _params = new URLSearchParams(params.toString());
      for (const [key, value] of Object.entries(obj)) {
        _params.set(key, value);
      }

      return _params.toString();
    },
    [params]
  );

  const pushParams = (
    obj: AppJson
  ) => {
    
    router.push(
     ( path ?? pathname )+ "?" + createQueryString(obj)
    );
  };

  const replaceParams = (
    obj: AppJson
  ) => {
    router.replace(
      ( path ?? pathname )+ "?" + createQueryString(obj)
    );
  };

  return { pushParams, replaceParams, params };
}