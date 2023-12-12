const HomeTitle = ({ title, subtitle }) => {
  return (
    <div className="font-graphik">
      <h3 className="text-2xl text-grey-2 font-medium tracking-[-0.96px]">
        {title}
      </h3>
      <p className="text-sm text-primary-grey tracking-[-0.56px]">{subtitle}</p>
    </div>
  );
};

export default HomeTitle;
