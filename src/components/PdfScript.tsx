import Script from "next/script";

export default function PdfScript({title = "reciept"}:{title?: string}) {
  return (
    <>
      <script
        async
        id="pdf-script"
        dangerouslySetInnerHTML={{
          __html: `
        document.getElementById('download-pdf').addEventListener('click', async function() {
                // Choose the element that your content will be rendered to.
                const element = document.getElementById('html-content');
                // Choose the element and save the PDF for your user.
                const opt = {
               filename: '${title}.pdf',
               image: { type: 'jpeg', quality: .98 },
               jsPDF: { unit: 'in', format: 'A4'}
    };
                html2pdf().from(element).set(opt).save();
        });
        `,
        }}
      ></script>
    </>
  );
}
