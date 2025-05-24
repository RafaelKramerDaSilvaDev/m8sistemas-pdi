export const App = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "calc(100dvh - 47px)",
        width: "calc(100dvw - 24px)",
        margin: 0,
        padding: 8,
      }}
    >
      <h2>Projeto de exemplo usando PWA</h2>
      <p style={{ textAlign: "center" }}>
        Essa aplicação funciona como aplicativo Desktop e Mobile (Android e
        IOS), e foi criada com{" "}
        <span style={{ fontWeight: "bold" }}>ReactJS</span>
      </p>
      <p style={{ textAlign: "center" }}>
        Isso é possível, pois, PWA (Progressive Web Applciation) é um tecnologia
        inovadora que tem o potencial tranformar uma aplicação para
        multiplatafroma, mas isso sem precisar escrever ela de novo!
      </p>
    </div>
  );
};
