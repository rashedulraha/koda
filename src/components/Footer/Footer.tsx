import Container from "../Responsive/Container";

const Footer = () => {
  return (
    <div className="border-t border-muted p-10">
      <Container>
        <div className="grid grid-cols-3 lg:grid-cols-6 gap-5">
          <div>
            <h2 className="text-lg font-bold">Koda</h2>
          </div>

          {/* footer feature section */}
          <div>
            <h3>Features</h3>
            <div className="flex flex-col gap-3 text-muted-foreground mt-5 capitalize text-sm">
              <p>plan</p>
              <p>build</p>
              <p>insights</p>
              <p>customer request</p>
              <p>koda ask</p>
              <p>security</p>
              <p>mobild</p>
            </div>
          </div>

          {/* footer products section */}
          <div>
            <h3>Products</h3>
            <div className="flex flex-col gap-3 text-muted-foreground mt-5 text-sm capitalize ">
              <p>pricing</p>
              <p>method</p>
              <p>integration</p>
              <p>changelog</p>
              <p>documentation</p>
              <p>download</p>
              <p>switch</p>
            </div>
          </div>

          {/* footer company section */}
          <div>
            <h3>Company</h3>
            <div className="flex flex-col gap-3 text-muted-foreground mt-5 text-sm capitalize">
              <p>About</p>
              <p>customer</p>
              <p>careers</p>
              <p>new</p>
              <p>readme</p>
              <p>quality</p>
              <p>brand</p>
            </div>
          </div>

          {/* footer recourse section */}
          <div>
            <h3>Features</h3>
            <div className="flex flex-col gap-3 text-muted-foreground mt-5 text-sm capitalize">
              <p>developer</p>
              <p>status</p>
              <p>startup </p>
              <p>Report vulnerability</p>
              <p>DPA</p>
              <p>privacy</p>
              <p>theme</p>
            </div>
          </div>
          <div>
            <h3>Features</h3>
            <div className="flex flex-col gap-3 text-muted-foreground mt-5 text-sm capitalize">
              <p>contact us</p>
              <p>community</p>
              <p>X (Twitter)</p>
              <p>github</p>
              <p>youtube</p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
