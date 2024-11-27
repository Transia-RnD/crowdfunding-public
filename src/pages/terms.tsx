import MainLayout from "@/components/templates/Layout"

Terms.getLayout = function getLayout(page: React.ReactElement) {
    return <MainLayout>{page}</MainLayout>
  }

export default function Terms() {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
        <p className="mb-4">
          This is a placeholder for the Terms of Service page. In a real application, this would contain the full terms of service for XRPL Crowdfunding.
        </p>
        <p>
          Please replace this content with your actual terms of service, detailing the rules, guidelines, and legal agreements between XRPL Crowdfunding and its users.
        </p>
      </div>
    )
  }
  
  