import { LabReportList } from '@/components/lab-reports/LabReportList'
import { Search, FileText, Download } from 'lucide-react'

export default function LabReportsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Lab Reports</h1>
          <p className="text-gray-600">
            Access detailed lab analysis reports for all our products. 
            We believe in complete transparency about the quality and purity of our products.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search lab reports..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
            </div>
            <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500">
              <option value="">All Products</option>
              <option value="honey">Honey</option>
              <option value="ghee">Ghee</option>
              <option value="flour">Flour</option>
              <option value="spices">Spices</option>
            </select>
          </div>
        </div>

        {/* Lab Reports List */}
        <LabReportList />

        {/* Info Section */}
        <div className="mt-12 bg-white rounded-lg shadow-sm border border-gray-200 p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="w-6 h-6 text-primary-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Comprehensive Testing
              </h3>
              <p className="text-gray-600 text-sm">
                Every product undergoes rigorous testing for purity, 
                quality, and safety standards.
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Download className="w-6 h-6 text-primary-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Easy Access
              </h3>
              <p className="text-gray-600 text-sm">
                Download detailed PDF reports for any product 
                with just one click.
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="w-6 h-6 text-primary-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Regular Updates
              </h3>
              <p className="text-gray-600 text-sm">
                Lab reports are updated regularly to ensure 
                you always have the latest information.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
