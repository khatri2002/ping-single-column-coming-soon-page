import { useForm, SubmitHandler } from "react-hook-form";
import classNames from "classnames";
import * as EmailValidator from "email-validator";

import styles from "./Home.module.scss";
import {
  FacebookIcon,
  IllustrationDashboard,
  InstagramIcon,
  Logo,
  TwitterIcon,
} from "../../assets/images";

type Input = {
  email: string;
};

const Home = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<Input>();
  const onSubmit: SubmitHandler<Input> = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    reset();
  };

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <img className={styles.logo} src={Logo} alt="logo" />
        <h1 className={styles.title}>
          We are launching <span className={styles.highlight}>soon!</span>
        </h1>
        <h2 className={styles.subTitle}>Subscribe and get notified</h2>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className={classNames({
            [styles.form]: true,
            [styles.error]: errors.email,
          })}
        >
          <div className={styles.inputContainer}>
            <input
              type="text"
              id="email"
              placeholder="Your email address..."
              {...register("email", {
                required: {
                  value: true,
                  message: "Email address is required",
                },
                validate: (value) =>
                  EmailValidator.validate(value) ||
                  "Please provide a valid email address",
              })}
              aria-invalid={errors.email ? "true" : "false"}
            />
            <span role="alert" className={styles.errorText}>
              {errors.email?.message}
            </span>
          </div>
          <button disabled={isSubmitting} type="submit">
            Notify Me
          </button>
        </form>
        <img
          className={styles.illustration}
          src={IllustrationDashboard}
          alt="illustration-dashboard"
        />
        <ul className={styles.socials}>
          <li>
            <a href="/">
              <img src={FacebookIcon} alt="facebook-icon" />
            </a>
          </li>
          <li>
            <a href="/">
              <img src={TwitterIcon} alt="twitter-icon" />
            </a>
          </li>
          <li>
            <a href="/">
              <img src={InstagramIcon} alt="instagram-icon" />
            </a>
          </li>
        </ul>
        <span className={styles.copyright}>
          &copy; Copyright Ping. All rights reserved.
        </span>
      </div>
    </main>
  );
};

export default Home;
