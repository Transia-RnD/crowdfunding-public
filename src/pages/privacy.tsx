import MainLayout from "@/components/templates/Layout"

Privacy.getLayout = function getLayout(page: React.ReactElement) {
    return <MainLayout>{page}</MainLayout>
  }

export default function Privacy() {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
        <p className="mb-4">
          This is a placeholder for the Privacy Policy page. In a real application, this would contain the full privacy policy for XRPL Crowdfunding.
        </p>
        <p>
          Please replace this content with your actual privacy policy, explaining how user data is collected, used, and protected by XRPL Crowdfunding.
        </p>
      </div>
    )
  }
  
  