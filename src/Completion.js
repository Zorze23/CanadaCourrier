import myPdf from "./components/completion.pdf";

function Completion(props) {
  return <div
            style={{
              position: "fixed",  
              inset: 0,            
              margin: 0,
              zIndex: 50,         
            }}
          >
            <iframe
              src={myPdf}
              title="Completion PDF"
              style={{
                width: "100%",
                height: "100%",
                border: "none",
              }}
            />
          </div>;
}

export default Completion;
