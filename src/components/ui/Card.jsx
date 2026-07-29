function Card({ children }) {
  return (
    <div className="rounded-[28px] bg-white p-10 shadow-xl">
      {children}
    </div>
  );
}

export default Card;