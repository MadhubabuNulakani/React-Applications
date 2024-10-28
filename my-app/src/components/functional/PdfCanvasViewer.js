import React from 'react';
import { Document, Page, pdfjs } from 'react-pdf';

// Set the workerSrc to load the PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const PdfCanvasViewer = ({ pdfData }) => {
    const base64Data = pdfData.split(',')[1];

    return (
      <div>
        <Document file={`data:application/pdf;base64,${base64Data}`}>
          <Page pageNumber={1} />
        </Document>
      </div>
    );
};

export default PdfCanvasViewer;
