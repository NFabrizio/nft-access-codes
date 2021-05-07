import React from "react";
import Web3 from "web3";

const RestrictedContent = ({ contract, route }) => {
  const isOwner = async() => {
    const response = await contract.methods.getApproved(1).call();
    return response;
  };
  isOwner()
  .then(response =>console.log(`isOwner: ${response}`));
  return (
    <div className="container-fluid mt-5">
      <div className="row">
        <main role="main" className="col-lg-12 d-flex text-center">
          <div className="content mr-auto ml-auto">
            <a href="#" onClick={e => {
              e.preventDefault();
              route('access');
            }}> ← Back </a>
            <h1>Restricted Content</h1>
          </div>
        </main>
      </div>
      <hr />
      <div className="row justify-content-md-center">
        <p>
          This is some restricted content that only token owners can see. If you
          send this URL to your friends, you will suffer the consequences.
        </p>
        <p>
          Bacon ipsum dolor amet cupim chuck boudin jerky short loin ground
          round turducken biltong chislic doner pastrami strip steak spare ribs
          flank tenderloin. Bresaola pig shank, doner burgdoggen buffalo short
          ribs pork loin hamburger sausage. Ribeye alcatra meatloaf beef ribs
          burgdoggen buffalo shank turducken pastrami tail prosciutto jerky
          landjaeger. Shankle burgdoggen frankfurter short loin ham salami pork
          belly. Rump hamburger bresaola tongue buffalo drumstick pork chop.
        </p>

        <p>
          Drumstick cow burgdoggen brisket, swine tenderloin ham hock tongue
          shoulder kielbasa meatloaf beef ribs. Porchetta pork belly pork loin
          leberkas buffalo biltong flank chislic chicken pork chop t-bone bacon
          short loin. Pork chop chislic capicola, shankle venison bacon fatback
          pastrami ground round burgdoggen leberkas short ribs swine porchetta
          sausage. Short ribs ham hock prosciutto turkey shankle tongue.
          Pastrami sausage andouille, tongue hamburger kielbasa pork chop
          brisket fatback landjaeger boudin. Shoulder shankle andouille
          drumstick, pork chop burgdoggen ribeye porchetta buffalo capicola
          alcatra hamburger chislic beef ribs. Rump pastrami flank shankle pork
          belly beef ribs landjaeger cupim chislic kielbasa pork loin doner
          prosciutto picanha chuck.
        </p>

        <p>
          Chuck shoulder salami swine leberkas, ham shankle meatloaf. Turkey
          t-bone leberkas bresaola. Beef shank jowl kielbasa, leberkas picanha
          pork loin filet mignon meatball cow turducken. Kevin jowl short ribs
          chuck alcatra brisket.
        </p>

        <p>
          Ribeye meatball brisket fatback alcatra, short loin landjaeger chuck
          bacon venison shoulder jerky. Kielbasa jowl ham chicken corned beef.
          Biltong ground round jowl ham hock, beef ribs turkey short ribs
          leberkas strip steak. Venison tenderloin shank, chuck cupim short ribs
          pancetta ham chicken pork belly beef. Sirloin pancetta short ribs
          ribeye, capicola leberkas andouille t-bone strip steak pork belly pork
          chop landjaeger cupim chicken. Pork spare ribs shoulder jerky strip
          steak swine chicken picanha tongue pastrami cupim andouille short loin
          meatball.
        </p>

        <p>
          Boudin kevin turducken, pastrami swine capicola ribeye leberkas
          burgdoggen. Capicola ball tip filet mignon chuck sirloin biltong ham
          cupim short loin strip steak corned beef brisket kevin meatloaf
          andouille. Corned beef shoulder turducken pork. Flank jowl sirloin
          kielbasa tenderloin brisket corned beef ground round ribeye.
        </p>
      </div>
    </div>
  );
};

export default RestrictedContent;
