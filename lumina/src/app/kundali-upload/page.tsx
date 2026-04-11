"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { Upload, FileText, CheckCircle, ArrowLeft, AlertCircle, X, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";

export default function KundaliUploadPage() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string>("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const acceptedFileTypes = ["image/jpeg", "image/jpg", "image/png", "application/pdf"];
  const maxFileSize = 10 * 1024 * 1024; // 10MB

  const validateFile = (file: File): string | null => {
    if (!acceptedFileTypes.includes(file.type)) {
      return "Please upload a valid file (JPG, PNG, or PDF only)";
    }
    if (file.size > maxFileSize) {
      return "File size must be less than 10MB";
    }
    return null;
  };

  const handleFileSelect = (file: File) => {
    setError("");
    const validationError = validateFile(file);
    if (validationError) {
      setError(validationError);
      setSelectedFile(null);
      return;
    }
    setSelectedFile(file);
  };

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      handleFileSelect(file);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (file) {
      handleFileSelect(file);
    }
  };

  const handleRemoveFile = () => {
    setSelectedFile(null);
    setError("");
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!selectedFile) {
      setError("Please select a file to upload");
      return;
    }

    setIsSubmitting(true);
    setError("");

    // Simulate upload - replace this with actual API call later
    try {
      // Simulated delay
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // TODO: Replace with actual API call
      // const formData = new FormData();
      // formData.append("kundali", selectedFile);
      // const response = await fetch("/api/kundali-upload", {
      //   method: "POST",
      //   body: formData,
      // });
      // if (!response.ok) throw new Error("Upload failed");

      setIsSuccess(true);
    } catch (err) {
      setError("Upload failed. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setIsSuccess(false);
    setSelectedFile(null);
    setError("");
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-ivory to-white py-16 md:py-24">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card variant="elevated" padding="lg" className="text-center">
            <CardContent className="py-12">
              <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-12 h-12 text-green-600" />
              </div>
              <h1 className="font-heading text-3xl font-bold text-charcoal mb-4">
                Kundali Submitted Successfully!
              </h1>
              <p className="text-lg text-charcoal/70 mb-2">
                Thank you for uploading your kundali.
              </p>
              <p className="text-charcoal/70 mb-8">
                Pandit Yash Shastri will review your kundali and contact you shortly
                to schedule your consultation.
              </p>

              <div className="bg-ivory rounded-lg p-6 mb-8">
                <h3 className="font-heading text-lg font-semibold text-charcoal mb-3">
                  What happens next?
                </h3>
                <div className="space-y-3 text-left">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-saffron text-white flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                      1
                    </div>
                    <div>
                      <p className="text-charcoal/80 text-sm">
                        We will review your kundali within 24 hours
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-saffron text-white flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                      2
                    </div>
                    <div>
                      <p className="text-charcoal/80 text-sm">
                        Pandit Ji will contact you via phone or WhatsApp
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-saffron text-white flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                      3
                    </div>
                    <div>
                      <p className="text-charcoal/80 text-sm">
                        Schedule your personalized consultation session
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button onClick={handleReset} variant="secondary" size="lg">
                  <Upload className="w-5 h-5" />
                  Upload Another Kundali
                </Button>
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 text-saffron font-medium hover:underline"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back to Home
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-ivory to-white py-16 md:py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <Link
            href="/kundali-guide"
            className="inline-flex items-center gap-2 text-saffron font-medium hover:underline mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Kundali Guide
          </Link>
          <div className="flex items-center justify-center gap-2 text-saffron mb-4">
            <Sparkles className="w-5 h-5" />
            <span className="text-sm font-medium">Kundali Reading Service</span>
          </div>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-charcoal mb-4">
            Upload Your Kundali
          </h1>
          <p className="text-lg text-charcoal/70 max-w-2xl mx-auto">
            Upload your kundali (birth chart) to book a personalized reading session
            with Pandit Yash Shastri.
          </p>
        </div>

        {/* Upload Form */}
        <form onSubmit={handleSubmit}>
          <Card variant="elevated" padding="lg" className="mb-6">
            <CardHeader>
              <CardTitle>Upload Your Kundali Document</CardTitle>
            </CardHeader>
            <CardContent>
              {/* Drag and Drop Area */}
              <div
                className={`relative border-2 border-dashed rounded-xl p-8 text-center transition-all ${
                  isDragging
                    ? "border-saffron bg-saffron/5"
                    : "border-muted hover:border-saffron/50 hover:bg-ivory/50"
                }`}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
              >
                <input
                  ref={fileInputRef}
                  type="file"
                  accept=".jpg,.jpeg,.png,.pdf"
                  onChange={handleFileInputChange}
                  className="hidden"
                  id="kundali-upload"
                />

                {!selectedFile ? (
                  <>
                    <div className="w-16 h-16 rounded-full bg-saffron/10 flex items-center justify-center mx-auto mb-4">
                      <Upload className="w-8 h-8 text-saffron" />
                    </div>
                    <h3 className="font-heading text-lg font-semibold text-charcoal mb-2">
                      Drag and drop your file here
                    </h3>
                    <p className="text-sm text-charcoal/60 mb-4">
                      or click the button below to browse
                    </p>
                    <Button
                      type="button"
                      variant="outline"
                      size="md"
                      onClick={() => fileInputRef.current?.click()}
                    >
                      <FileText className="w-4 h-4" />
                      Choose File
                    </Button>
                    <p className="text-xs text-charcoal/50 mt-4">
                      Supported formats: JPG, PNG, PDF (Max 10MB)
                    </p>
                  </>
                ) : (
                  <div className="bg-ivory rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded bg-saffron/10 flex items-center justify-center">
                          <FileText className="w-6 h-6 text-saffron" />
                        </div>
                        <div className="text-left">
                          <p className="font-medium text-charcoal">{selectedFile.name}</p>
                          <p className="text-sm text-charcoal/60">
                            {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
                          </p>
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={handleRemoveFile}
                        className="w-8 h-8 rounded-full hover:bg-red-100 flex items-center justify-center text-red-600 transition-colors"
                      >
                        <X className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Error Message */}
              {error && (
                <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-red-800">{error}</p>
                </div>
              )}

              {/* Submit Button */}
              <div className="mt-6">
                <Button
                  type="submit"
                  variant="secondary"
                  size="lg"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Uploading...
                    </>
                  ) : (
                    <>
                      <Upload className="w-5 h-5" />
                      Submit Kundali
                    </>
                  )}
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Info Card */}
          <Card variant="bordered" className="bg-blue-50/50 border-blue-200">
            <CardHeader>
              <CardTitle className="text-blue-900 flex items-center gap-2">
                <AlertCircle className="w-5 h-5" />
                Important Information
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-charcoal/80">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>
                    Upload a clear image or PDF of your complete kundali (birth chart)
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>
                    Ensure birth details (date, time, place) are visible in the document
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>
                    Pandit Ji will review and contact you within 24 hours to schedule your
                    consultation
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>
                    For immediate consultation, you can also call directly at{" "}
                    <a
                      href="tel:9716684871"
                      className="text-saffron font-medium hover:underline"
                    >
                      9716684871
                    </a>
                  </span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </form>

        {/* Alternative Options */}
        <div className="mt-12 text-center">
          <p className="text-charcoal/60 mb-4">Don't have your kundali ready?</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/astrology-consultation"
              className="inline-flex items-center gap-2 text-saffron font-medium hover:underline"
            >
              Book a consultation first
              <ArrowLeft className="w-4 h-4 rotate-180" />
            </Link>
            <span className="text-charcoal/40">or</span>
            <Link
              href="/kundali-guide"
              className="inline-flex items-center gap-2 text-saffron font-medium hover:underline"
            >
              Read our complete kundali guide
              <ArrowLeft className="w-4 h-4 rotate-180" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
