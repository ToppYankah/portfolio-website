export default () => {
  return (
    <div className="col-start-1 col-end-2 row-start-3 row-end-4 flex items-end">
      <div id="short-bio" className="text-sm">
        <div className="overflow-hidden">
          <p>
            {"Kenneth Topp Yankah is a visionary software"
              .split("")
              .map((char, index) => (
                <span key={`bio-span-first-${index}`} className="opacity-50">
                  {char}
                </span>
              ))}
          </p>
        </div>
        <div className="overflow-hidden">
          <p>
            {"developer specializing in crafting cutting-edge"
              .split("")
              .map((char, index) => (
                <span key={`bio-span-second-${index}`} className="opacity-50">
                  {char}
                </span>
              ))}
          </p>
        </div>
        <div className="overflow-hidden">
          <p>
            {"solutions for web and mobile experiences"
              .split("")
              .map((char, index) => (
                <span key={`bio-span-third-${index}`} className="opacity-50">
                  {char}
                </span>
              ))}
          </p>
        </div>
      </div>
    </div>
  );
};
