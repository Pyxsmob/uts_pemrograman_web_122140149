const LoadingSpinner = () => {
    return (
      <div className="flex justify-center items-center h-32">
        <div className="w-12 h-12 border-4 border-blue-500 border-solid border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  };
  
  export default LoadingSpinner;