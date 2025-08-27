function Input(props) {
  return (
    <input
      //type={props.type}
      //placeholder={props.placeholder}
      className="w-full p-2 rouded-md"
      //value={props.titulo}
      //onChange={props.onChange}

      {...props} //É possivel fazer esse spread, todos os dados serão passados pelo pros, mas não será necessário adicionar ele ao input, tudo será adicionado automáticamente
    />
  );
}

export default Input;
