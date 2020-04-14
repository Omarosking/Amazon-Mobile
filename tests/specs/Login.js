const LoginToAmazon = (email, pass) => {

    const SignInBtn = '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup[1]/android.view.ViewGroup/android.widget.TextView';
    $(SignInBtn).click();

    const emailField = 'android=new UiSelector().resourceId("ap_email")';
    $(emailField).waitForDisplayed();
    $(emailField).setValue(email); 

    const passField = 'android=new UiSelector().resourceId("ap_password")';
    $(passField).waitForDisplayed();
    $(passField).setValue(pass);

    const LoginBtn = 'android=new UiSelector().resourceId("signInSubmit")'; 
    $(LoginBtn).click();

};

describe('Sucessfull login to Amazon app store', () => {

    it('should type in valid email and password to login successfully', () => {
        LoginToAmazon('blabla@mail.com','pass');
    });

});
