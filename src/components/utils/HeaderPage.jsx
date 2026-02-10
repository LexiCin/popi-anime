const HeaderPage = ({ titlePage }) => {
  return (
    <div className="flex justify-center text-center items-center mt-2 p-1 text-2xl text-primary font-bold lg:text-3xl">
      <h1>{titlePage}</h1>
    </div>
  );
};

export default HeaderPage;
