interface propstype {
  Lang: string,
}
export default function About(props: propstype) {
  return (
    <div
      id="about"
      className="flex flex-col justify-center items-start mx-5 md:mx-20 mb-10 mt-40"
    >
      {props.Lang === "Fa" ?
        <div>
          <p className="text-2xl md:text-4xl">پارچ لینوکس چیست؟</p>
          <br />
          <p className="text-xl md:text-2xl leading-10">
            پارچ یک توضیع بر پایه آرچ است.که سعی میکند زیبا،آسان برای استفاده،سبک،سریع و پایدار باشد.
          </p>
          <br />
          <p className="text-2xl md:text-4xl">
            چرا آن را پارچ صدا میکنیم!؟
          </p>
          <br />
          <p className="text-xl md:text-2xl leading-10">
            در ابتدا قصد داشتیم پارچ را به پلفتفرمی برای کاربران فارسی زبان تبدیل کنیم برای همین نام آن را (Persian Aarch) Parch گذاشتیم. اما اکنون اهداف جامع تری نسبت به قبل داریم.
          </p>
        </div> :
        <div>
          <p className="text-2xl md:text-4xl">What is Parch Linux?</p>
          <br />
          <p className="text-xl md:text-2xl leading-10">
            The Parch Linux is a Linux distro based on Arch, that tried to be
            pretty, easy to use, light, fast and stable.
          </p>
          <br />
          <p className="text-2xl md:text-4xl">Why do we call this Parch?</p>
          <br />
          <p className="text-xl md:text-2xl leading-10">
            At the beginning of our work, we planned to make Parch a platform for
            Persian-speaking users, that\'s why we named it Parch ( Persian Arch ).
            But now we have more comprehensive goals than before.
          </p>
        </div>
      }
    </div>
  );
}
