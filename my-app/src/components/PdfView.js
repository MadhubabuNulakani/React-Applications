import React, { useState, useRef } from 'react';
import { Stage, Layer, Line } from 'react-konva';
import { pdfjs, Document, Page } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

// Set the PDF.js worker to use the local path
pdfjs.GlobalWorkerOptions.workerSrc = `${process.env.PUBLIC_URL}/pdf.worker.js`;

const PDFWithLine = ({ fileUrl }) => {
    const [lines, setLines] = useState([]); // Store all the lines drawn by the user
    const [isDrawing, setIsDrawing] = useState(false);
    const stageRef = useRef(null);

    const handleMouseDown = () => {
        setIsDrawing(true);
        const pos = stageRef.current.getPointerPosition();
        setLines([...lines, { points: [pos.x, pos.y] }]); // Start a new line
    };

    const handleMouseMove = () => {
        if (!isDrawing) return;

        const stage = stageRef.current;
        const point = stage.getPointerPosition();
        let lastLine = lines[lines.length - 1];
        lastLine.points = lastLine.points.concat([point.x, point.y]);

        lines.splice(lines.length - 1, 1, lastLine);
        setLines([...lines]);
    };

    const handleMouseUp = () => {
        setIsDrawing(false);
    };

    const getLineCoordinates = () => {
        const lastLine = lines[lines.length - 1];
        if (lastLine) {
            console.log("Last drawn line coordinates:", lastLine.points);
        }
    };

    return (
        <div style={{ position: 'relative', height: '750px' }}>
            {/* PDF Viewer */}
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}>
                <Document file={fileUrl}>
                    <Page pageNumber={1} />
                </Document>
            </div>

            {/* Drawing Layer using react-konva */}
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}>
                <Stage
                    ref={stageRef}
                    width={window.innerWidth}
                    height={window.innerHeight}
                    onMouseDown={handleMouseDown}
                    onMousemove={handleMouseMove}
                    onMouseup={handleMouseUp}
                    style={{ pointerEvents: 'none' }}
                >
                    <Layer>
                        {lines.map((line, index) => (
                            <Line
                                key={index}
                                points={line.points}
                                stroke="red"
                                strokeWidth={2}
                                tension={0.5}
                                lineCap="round"
                                lineJoin="round"
                            />
                        ))}
                    </Layer>
                </Stage>
            </div>

            {/* Button to log line coordinates */}
            <div style={{ position: 'absolute', top: '10px', right: '10px' }}>
                <button onClick={getLineCoordinates}>Get Line Coordinates</button>
            </div>
        </div>
    );
};

export default PDFWithLine;
