import React from 'react';
import styles from './FormControl.module.css';
import {Field} from "redux-form";
import {required} from "../../utils/validators/validators";

/*//Не самое удачное решение Димы
const FormControl = ({input, meta, ...props}) => {
    const haveError = meta.error && meta.touched;

    return <div className={styles.formControl + ' ' + (haveError && styles.error)}>
        <div>
            {props.children}
        </div>
        <div>
            {haveError && <span>{meta.error}</span>}
        </div>
    </div>
}

export const Textarea = (props) => {
    const {input, meta, ...restProps} = props;
    return <FormControl {...props}>
        <textarea {...input} {...restProps}/>
    </FormControl>
}

export const Input = (props) => {
    const {input, meta, ...restProps} = props;
    return <FormControl {...props}>
        <input {...input} {...restProps}/>
    </FormControl>
}*/

/*Наверно, лучшее решение из комментариев (урок 77)
Моё решение – пишем такой HOC // ЛИЧНО Я НЕ ОЧЕНЬ УВЕРЕН, ЧТО ЭТО МОЖНО НАЗВАТЬ HOC'ОМ, НАДО ПРОВЕРИТЬ!

const Element = Element => ({ input, meta, ...props }) => {
  const hasError = meta.touched && meta.error;
  return (
    <div className={ s.formControl + " " + (hasError ? s.error : "") }>
      <Element {...input} {...props} />
      { hasError && <span> { meta.error } </span> }
    </div>
  );
};

А потом просто его импортим в компоненту формы, вызываем как

const Textarea = Element("textarea");

и передаем

<Field component={Textarea} .../>

Все работает!)


P.S. Аргумент у HOC должен быть с большой буквы, чтобы React понимал, что перед ним не обычный html-тег, а компонент/переменная.
P.P.S. Создавать const Textarea = Element("textarea"); нужно вне компонента с формой. Иначе фокус с формы сбрасывается после первого символа (хз почему, видимо, ререндерится)*/
export const ElementCreator = Element => ({input, meta: {touched, error}, ...props}) => {
    const hasError = touched && error;
    /* //Мой вариант return'a
    return (props) => {
        return <div className={styles.formControl + ' ' + (hasError && styles.error)}>
            <Element {...input} {...props} />
            {hasError && <span> {meta.error} </span>}
        </div>;
    };*/

    return <div className={styles.formControl + ' ' + (hasError && styles.error)}>
        <Element {...input} {...props} />
        {hasError && <span> {error} </span>}
    </div>;
}

export const createField = (name, component, validators, placeholder, props = {}, text=null) => {
    return  <div>
        <Field name={name} component={component} validate={validators} placeholder={placeholder} {...props}/>{text}
    </div>
}
