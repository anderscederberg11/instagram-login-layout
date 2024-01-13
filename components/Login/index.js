import styles from './Login.module.css'
import Image from 'next/image'

export default function Login() {
    return(
        <>
            <div className={styles.formContainer}>
                <Image src={'/images/instagram.png'} alt="logo" width={190} height={75} className={styles.instaLogo}/>
                    <form className={styles.form}>
                        <fieldset className={styles.fieldSet}>
                            <input
                                id="username"
                                className={styles.usernameInput}
                                type="text"
                                placeholder='Phone number, username, or email'
                            />
                            <br/>
                            <input
                                id="password"
                                className={styles.passwordInput}
                                type="password"
                                placeholder='Password'
                            />
                        </fieldset>
                    </form>
                <button className={styles.loginButton}>Log In</button>
                    <div className={styles.divider}>
                        <div className={styles.line}></div>
                            <p>OR</p>
                        <div className={styles.line}></div>
                    </div>
                <div className={styles.loginFooter}>
                    <div className={styles.facebookContainer}>
                        <Image src={'/images/facebookicon.png'} alt="facebook logo" width={25} height={19}/>
                        <p className={styles.facebookText}>Log in with Facebook</p>
                    </div>
                    <p className={styles.forgot}>Forgot Password?</p>
                </div>
            </div>
            <div className={styles.signUp}>
                        <p className={styles.textGray}>Don't have an account?</p>
                        <p className={styles.textBlue}>Sign up</p>
            </div>
            <div className={styles.apps}>
                <p>Get the app.</p>
                    <div className={styles.appImages}>
                        <Image src={'/images/appstore.png'} alt="appstore" width={136} height={136} className={styles.appstoreImage}/>
                        <Image src={'/images/googleplay.png'} alt="appstore" width={136} height={136} className={styles.googleStoreImage}/>
                    </div>
            </div>
            <footer className={styles.footer}>
                <p>
                    <span>Meta</span>
                    <span>About</span>
                    <span>Blog</span>
                    <span>Jobs</span>
                    <span>Help</span>
                    <span>API</span>
                    <span>Privacy</span>
                    <span>Terms</span>
                    <span>Locations</span>
                    <span>Instagram Lite</span>
                    <span>Threads</span>
                    <span>Contact Uploading & Non-Users</span>
                    <span>Meta Verified</span>
                </p>
                <p>
                    <span>English</span>
                    <span>© 2024 Instagram from Meta</span>
                </p>
            </footer>

        </>
    )
}