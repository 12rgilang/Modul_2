import TypeWriter from "typewriter-effect";

function Quote() {
  return (
    <>
      <div className="typewriter my-[50px] px-[30px] h-fit ">
        <span className="flex items-center justify-center text-white font-bold my-secondary text-xl">
          <TypeWriter
            options={{
              strings: [
                "Change is the only constant in life. Embracing it, especially when it means leaving behind a familiar and comfortable career path, can be challenging but ultimately rewarding. Moving to a new working environment allows us to grow, learn, and challenge ourselves in ways that we might not have otherwise. It's a chance to discover new passions and to create a future that is uniquely our own.",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </span>
      </div>
    </>
  );
}

export default Quote;
