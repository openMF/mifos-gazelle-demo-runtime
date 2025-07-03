export const Footer = () => {
    return(
      <div className="bg-white dark:bg-gray-900 py-12 px-6 border-t border-gray-200 dark:border-white">
      <div className="max-w-7xl mx-auto text-center flex justify-center items-center">
        <div className="flex justify-center">
          <img
            src="/gazelle.svg"
            alt="Mifos Logo"
            width={80}
            height={80}
            className="opacity-80 dark:opacity-90"
          />
        </div>
        <p className="text-gray-500 dark:text-gray-400 text-sm mb-8">
          Discover the power of open-source financial technology solutions
        </p>
      </div>
    </div>
    )
}