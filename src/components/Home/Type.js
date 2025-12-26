import Typewriter from "typewriter-effect";

function Type() {
  
  const lang = navigator.language || navigator.userLanguage;
  const isPtBr = lang === 'pt-BR';
  
  return (
    <div>
      {isPtBr ? (
        <>
        <Typewriter
              options={{
                strings: [
                  "Desenvolvedor de software",
                  "Apaixonado por tecnologia",
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 20,
              }}
        />
        </>
      ) : (
        <>
          <Typewriter
                options={{
                  strings: [
                    "Software Developer",
                    "Passionate about technology",
                  ],
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 20,
                }}
          />
        </>
      )}
    </div>
  );
}

export default Type;
