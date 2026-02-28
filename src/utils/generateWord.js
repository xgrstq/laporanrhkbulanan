import { Document, Packer, Paragraph, TextRun, AlignmentType } from "docx"
import { saveAs } from "file-saver"

export async function generateWord(form) {
  const doc = new Document({
    sections: [
      {
        children: [

          new Paragraph({
            alignment: AlignmentType.CENTER,
            children: [
              new TextRun({
                text: "KEMENTERIAN SOSIAL REPUBLIK INDONESIA",
                bold: true,
              }),
            ],
          }),

          new Paragraph({ text: "" }),

          new Paragraph({
            alignment: AlignmentType.CENTER,
            children: [
              new TextRun({
                text: "LAPORAN HARIAN",
                bold: true,
              }),
            ],
          }),

          new Paragraph({
            alignment: AlignmentType.CENTER,
            text: form.rhk || "-",
          }),

          new Paragraph({
            alignment: AlignmentType.CENTER,
            children: [
              new TextRun({
                text: `(${form.kegiatan || "-"})`,
                italics: true,
              }),
            ],
          }),

          new Paragraph({ text: "" }),

          new Paragraph({
            children: [
              new TextRun({ text: "A. Pendahuluan", bold: true }),
            ],
          }),

          new Paragraph({
            children: [
              new TextRun({ text: "Umum: ", bold: true }),
              new TextRun(form.umum || "-"),
            ],
          }),

          new Paragraph({ text: "" }),

          new Paragraph({
            children: [
              new TextRun({ text: "B. Tujuan", bold: true }),
            ],
          }),

          new Paragraph(form.tujuan || "-"),

          new Paragraph({ text: "" }),

          new Paragraph({
            children: [
              new TextRun({ text: "C. Narasi Pelaksanaan", bold: true }),
            ],
          }),

          new Paragraph(form.narasi || "-"),

          new Paragraph({ text: "" }),

          new Paragraph({
            children: [
              new TextRun({ text: "D. Hasil", bold: true }),
            ],
          }),

          new Paragraph(form.hasil || "-"),

        ],
      },
    ],
  })

  const blob = await Packer.toBlob(doc)
  saveAs(blob, "Laporan-Harian.docx")
}
