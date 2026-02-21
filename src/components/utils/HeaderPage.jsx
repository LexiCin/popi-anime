const HeaderPage = ({ titlePage }) => {
  return (
    <div className="flex justify-center text-center items-center p-2 text-2xl text-accent font-bold lg:text-3xl mb-3">
      <h1>{titlePage}</h1>
    </div>
  );
};

export default HeaderPage;
