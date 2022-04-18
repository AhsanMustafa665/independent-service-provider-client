import React from 'react';

const Blogs = () => {
    return (
        <div className='container'>
           <div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
     <strong> 1. What is authorazition and authentication difference?</strong>
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body">
                <strong>Authentication</strong> <br />
                i) Authentication is about validating your credentials like User Name/User ID and password to verify your identity. <br />
                ii) Authentication factors determine the various elements the system use to verify one’s identity <br />
                iii) For example, when you enter your ATM card into the ATM machine, the machine asks you to enter your pin. <br /><br />
                <strong>Authorization</strong> <br />
                i) Authorization, on the other hand, occurs after your identity is successfully authenticated by the system. <br />
                ii) Authorization is the process to determine whether the authenticated user has access to the particular resources. <br />
                iii) For example, the process of verifying and confirming employees ID and passwords in an organization is called authentication, but determining which employee has access to which floor is called authorization.
 </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                <strong>2.1 Why are you using firebase? </strong> <br />
                
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      Firebase Database: used to store users data like chat messages, users details and other metadata <br />
Firebase Cloud Storage: used to store user-generated content like the profile picture, multimedia messages, etc. <br />
                Firebase Cloud Messaging: used to send notification.
                <br />
                <br />
                <strong>2.2 What other option do you have to implement authentication?</strong> <br />
                i) Password-based authentication. Passwords are the most common methods of authentication. <br />
                ii) Multi-factor authentication. <br />
                iii) Certificate-based authentication. <br />
                iv) Token-based authentication.

                


      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                <strong>3. What other services does firebase provider other than authentication?</strong> <br />
                
                
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      i) Drop-in authentication solution. <br />
                ii) Email and password based authentication. <br />
                iii) Federated identity provider integration. <br />
                iv) Custom auth system integration. <br />
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Blogs;