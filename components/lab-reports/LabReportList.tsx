'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Download, Eye, Calendar } from 'lucide-react'

// Mock data - in real app this would come from API
const labReports = [
  {
    id: '1',
    title: 'Raw Wildflower Honey - Lab Analysis',
    description: 'Comprehensive lab analysis report for our raw wildflower honey, including nutritional content, purity tests, and quality metrics.',
    pdfUrl: '/lab-reports/honey-analysis.pdf',
    thumbnailUrl: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=300&h=400&fit=crop',
    productName: 'Raw Wildflower Honey',
    testDate: '2024-01-15',
    fileSize: '2.4 MB',
    pages: 8,
  },
  {
    id: '2',
    title: 'Pure Cow Ghee - Quality Certificate',
    description: 'Quality certificate and nutritional analysis for our pure cow ghee, confirming its authenticity and purity standards.',
    pdfUrl: '/lab-reports/ghee-certificate.pdf',
    thumbnailUrl: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=400&fit=crop',
    productName: 'Pure Cow Ghee',
    testDate: '2024-01-10',
    fileSize: '1.8 MB',
    pages: 6,
  },
  {
    id: '3',
    title: 'Stone-Ground Wheat Flour - Nutritional Analysis',
    description: 'Detailed nutritional analysis of our stone-ground wheat flour, including fiber content, protein levels, and mineral composition.',
    pdfUrl: '/lab-reports/flour-analysis.pdf',
    thumbnailUrl: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=300&h=400&fit=crop',
    productName: 'Stone-Ground Wheat Flour',
    testDate: '2024-01-08',
    fileSize: '3.1 MB',
    pages: 12,
  },
  {
    id: '4',
    title: 'Organic Jaggery - Purity Test Report',
    description: 'Purity test report for our organic jaggery, confirming no chemical additives and authentic production methods.',
    pdfUrl: '/lab-reports/jaggery-purity.pdf',
    thumbnailUrl: 'https://images.unsplash.com/photo-1609501676725-7186f3a4a0a8?w=300&h=400&fit=crop',
    productName: 'Organic Jaggery',
    testDate: '2024-01-05',
    fileSize: '1.5 MB',
    pages: 4,
  },
  {
    id: '5',
    title: 'Cold-Pressed Coconut Oil - Quality Assurance',
    description: 'Quality assurance report for our cold-pressed coconut oil, including fatty acid profile and purity tests.',
    pdfUrl: '/lab-reports/coconut-oil-qa.pdf',
    thumbnailUrl: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=300&h=400&fit=crop',
    productName: 'Cold-Pressed Coconut Oil',
    testDate: '2024-01-03',
    fileSize: '2.7 MB',
    pages: 10,
  },
  {
    id: '6',
    title: 'Raw Manuka Honey - UMF Certification',
    description: 'UMF certification and detailed analysis for our raw Manuka honey, confirming its antibacterial properties and authenticity.',
    pdfUrl: '/lab-reports/manuka-umf.pdf',
    thumbnailUrl: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=300&h=400&fit=crop',
    productName: 'Raw Manuka Honey',
    testDate: '2024-01-01',
    fileSize: '4.2 MB',
    pages: 15,
  },
]

export function LabReportList() {
  const [selectedReport, setSelectedReport] = useState<string | null>(null)

  const handleDownload = (pdfUrl: string, title: string) => {
    // In real app, this would trigger actual download
    console.log(`Downloading ${title} from ${pdfUrl}`)
    // For demo purposes, we'll just show an alert
    alert(`Downloading ${title}...`)
  }

  const handlePreview = (reportId: string) => {
    setSelectedReport(selectedReport === reportId ? null : reportId)
  }

  return (
    <div className="space-y-6">
      {labReports.map((report) => (
        <div key={report.id} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          <div className="p-6">
            <div className="flex flex-col md:flex-row gap-6">
              {/* Thumbnail */}
              <div className="relative w-full md:w-48 h-48 md:h-32 flex-shrink-0">
                <Image
                  src={report.thumbnailUrl}
                  alt={report.title}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {report.title}
                    </h3>
                    <p className="text-gray-600 mb-3">
                      {report.description}
                    </p>
                    
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <Calendar size={14} />
                        <span>Tested: {new Date(report.testDate).toLocaleDateString()}</span>
                      </div>
                      <span>•</span>
                      <span>{report.fileSize}</span>
                      <span>•</span>
                      <span>{report.pages} pages</span>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-col sm:flex-row gap-2">
                    <button
                      onClick={() => handlePreview(report.id)}
                      className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
                    >
                      <Eye size={16} />
                      Preview
                    </button>
                    <button
                      onClick={() => handleDownload(report.pdfUrl, report.title)}
                      className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 rounded-lg transition-colors"
                    >
                      <Download size={16} />
                      Download
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Preview Section */}
            {selectedReport === report.id && (
              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-medium text-gray-900 mb-2">Report Preview</h4>
                  <p className="text-sm text-gray-600 mb-4">
                    This is a preview of the lab report. Click download to get the full PDF.
                  </p>
                  <div className="bg-white rounded border p-4 text-center">
                    <div className="w-16 h-20 bg-gray-200 rounded mx-auto mb-2 flex items-center justify-center">
                      <span className="text-xs text-gray-500">PDF</span>
                    </div>
                    <p className="text-xs text-gray-500">
                      {report.title} - {report.pages} pages
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}
