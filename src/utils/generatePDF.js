import html2pdf from "html2pdf.js"

export function generatePDF() {
  const element = document.getElementById("print-lihat")

  if (!element) {
    alert("Preview belum tersedia")
    return
  }

  const opt = {
    margin: 10,
    filename: "Laporan-Harian.pdf",
    image: { type: "jpeg", quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: {
      unit: "mm",
      format: "a4",
      orientation: "portrait"
    }
  }

  html2pdf().set(opt).from(element).save()
}