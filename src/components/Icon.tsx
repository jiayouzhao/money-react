// eslint-disable-next-line no-undef
const importAll = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().forEach(requireContext);
try {
	importAll(require.context("../icons/", true, /\.svg$/));
} catch (error) {
	console.log(error);
}

type Props = {
    name: string,
    classPre?:string
}
 
function Icon(props: Props) {
	return (
		<svg className={props.classPre ? `${props.classPre}Icon icon` : "icon"}>
			<use xlinkHref={`#${props.name}`}></use>
		</svg>
	);
}

export default Icon;