<?php
require('./FPDF/fpdf.php');

$cont = $_POST['texto'];

$pdf = new FPDF();
$pdf->AddPage();
$pdf->SetFont('Arial','B',16);
$pdf->Cell(40,10,$cont);
$pdf->Output();
?>