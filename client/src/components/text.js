export const PageTitle = function (props) {
  let classes =
    'block text-4xl lg:text-5xl break-words font-extrabold tracking-tight md:text-' +
    props.alignment +
    ' text-' +
    props.color +
    ' text-' +
    props.mobileAlignment;

  return (
    <span className={classes} onClick={props.onClick}>
      {props.name}
    </span>
  );
};
export const PageBody = function (props) {
  let classes =
    'text-base mt-4 break-words md:text-' +
    props.alignment +
    ' text-' +
    props.color +
    ' text-' +
    props.mobileAlignment;

  return (
    <p className={classes} onClick={props.onClick}>
      {props.name}
    </p>
  );
};

export const SectionTitle = function (props) {
  let classes =
    props.additional +
    ' block text-xl font-bold text-' +
    props.alignment +
    ' text-' +
    props.color;

  return (
    <span className={classes} onClick={props.onClick}>
      {props.name}
    </span>
  );
};

export const NormalText = function (props) {
  let classes =
    props.additional +
    ' block text-' +
    props.alignment +
    ' text-' +
    props.color;

  return (
    <span className={classes} onClick={props.onClick}>
      {props.name}
    </span>
  );
};

export const CardTitle = function (props) {
  let classes =
    props.additional +
    ' truncate block text-md font-semibold text-' +
    props.alignment +
    ' text-' +
    props.color;

  return (
    <span className={classes} onClick={props.onClick}>
      {props.name}
    </span>
  );
};

export const CardBody = function (props) {
  let classes =
    'block text-md text-' +
    props.alignment +
    ' text-' +
    props.color +
    ' ' +
    props.additional;

  return (
    <p onClick={props.onClick} className={classes}>
      {props.name}
    </p>
  );
};

export const CardSubText = function (props) {
  let classes =
    'text-sm font-normal text-' +
    props.alignment +
    ' text-' +
    props.color +
    ' ' +
    props.additional;

  return (
    <span className={classes} onClick={props.onClick}>
      {props.name}
    </span>
  );
};

export const SmallText = function (props) {
  let classes =
    'text-xs text-' +
    props.alignment +
    ' text-' +
    props.color +
    ' ' +
    props.additional;

  return (
    <span className={classes} onClick={props.onClick}>
      {props.name}
    </span>
  );
};
