function Loader() {
  return (
    <div className=" text-stone-500 mt-[14%]">
      <Bars
        height="80"
        width="50"
        color="#388697"
        ariaLabel="bars-loading"
        wrapperStyle={{}}
        wrapperClass=""
        margin="auto"
        visible={true}
      />
    </div>
  );
}

export default Loader;
