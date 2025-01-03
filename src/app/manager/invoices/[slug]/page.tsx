import { invoiceDummy } from "@/utils/dummy";
import Invoice from "./Invoice";
import { PageTitle } from "@/components/admin";
import { fetchIndividualInvoice } from "@/actions";
import { AppPageProps } from "@/types/basicTypes";

export default async function Page(
  {params}:AppPageProps
) {
    const invoice = await fetchIndividualInvoice(params.slug);
    if(!invoice || invoice == 'error') return <div className="info">error fetching invoice</div>
    
    return (
        <div>
             <PageTitle className="py-2 flex justify-between w-full items-center">
        Invoice #{invoice.voucher_number}
          <button id="download-pdf" className="btn-dark !py-1.5 !px-5 !font-normal !text-sm">
            Download PDF
          </button>
      </PageTitle>
           <Invoice {...invoice} />
           {/* </div> */}
        </div>
    );
}