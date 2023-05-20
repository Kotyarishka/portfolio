import Link from "next/link";
import styles from "./button.module.css"

// Тут произошла мини Chakra UI 🤯
const ButtonIcon = ({icon}) => {
  return <span className={styles.icon}>
    {icon}
  </span>
}

const ButtonContent = ({
  leftIcon, rightIcon, children
}) => {
  return (
    <>
      {leftIcon && <ButtonIcon icon={leftIcon}/>}
      {children}
      {rightIcon && <ButtonIcon icon={rightIcon}/>}
    </>
  )
}

export const Button = ({leftIcon, rightIcon, linkTo, style = "primary", ...rest}) => {  
  const {children} = rest;
  rest.children = null

  if (linkTo && linkTo != "#") return (
    <Link href={linkTo} className={[styles.button, styles[style]].join(" ")} {...rest}>
      <ButtonContent leftIcon={leftIcon} rightIcon={rightIcon}>
        {children}
      </ButtonContent>
    </Link>
  )

  
  
  return (
      <button className={[styles.button, styles[style]].join(" ")} {...rest}>
        <ButtonContent leftIcon={leftIcon} rightIcon={rightIcon}>
          {children}
        </ButtonContent>
      </button>
    );
  };