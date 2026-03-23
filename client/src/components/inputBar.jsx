export default function InputBar({placeholder , type}){
    return(
        <input
            type={type}
            placeholder={placeholder}
            className="bg-gray/80 py-3 min-w-75 text-md focus:border-2 focus:outline-none focus:transition-colors focus:border-amber-400 px-4 rounded-lg w-full focus:scale-[1.01] transition-transform duration-300"
          />
    )
}