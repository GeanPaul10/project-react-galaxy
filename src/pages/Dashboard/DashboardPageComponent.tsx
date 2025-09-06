import Layout from "../../layout/Layout";
function DashboardPageComponent() {
  return (
    <Layout isFooter={true}>
      <div className="block items-center justify-between border-b border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-800 sm:flex">
        <div className="mb-1 w-full">
          <div className="mb-2">
            <h1 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl mt-8">
              Mis Estadísticas :
            </h1>
          </div>
          <div className="sm:flex">
            <div className="mb-3 hidden items-center dark:divide-gray-700 sm:mb-0 sm:flex sm:divide-x sm:divide-gray-100">
              <div className="ml-auto flex items-center space-x-2 sm:space-x-3">
                Dashboard
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );

}

export default DashboardPageComponent;