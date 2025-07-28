import { HiUser } from "react-icons/hi";
import { auth } from "../firebase";

function ChatMessage(props: any) {
  const { text, uid, photoURL, userName } = props.message;
  const isSentMessage = uid === auth.currentUser?.uid;

  const previousMessage = props.previousMessage;
  const isFirstMessage = !previousMessage;

  // Verifica se esta é a primeira mensagem ou se a mensagem anterior foi enviada por um utilizador diferente
  const shouldShowProfileImage = isFirstMessage || previousMessage?.uid !== uid;

  return (
    <div
      className={`message ${
        isSentMessage
          ? "flex flex-row-reverse self-end"
          : "flex flex-row self-start"
      } items-center gap-2 text-white`}
    >
      {shouldShowProfileImage &&
        (photoURL ? (
          <img
            src={photoURL}
            alt="perfil"
            loading="lazy"
            className="h-9 w-9 self-end rounded-full"
          />
        ) : (
          <div className="flex h-9 w-9 items-center justify-center overflow-hidden rounded-full bg-neutral-300">
            <HiUser className="mt-2 h-14 w-14 text-neutral-500" />
          </div>
        ))}
      <div>
        <div
          className={`text-sm font-light text-neutral-500 ${
            isSentMessage ? "text-right" : "text-left"
          } ${shouldShowProfileImage ? "" : "hidden"}`}
        >
          {/* Traduzido "Guest" para "Convidado" */}
          {userName ? userName.split(" ")[0] : "Convidado"}
        </div>
        <p
          className={`message ${
            isSentMessage
              ? "w-fit rounded-2xl bg-purple-600" // Cor alterada para ser mais acolhedora
              : "w-fit rounded-2xl bg-neutral-700" // Cor alterada para um cinzento mais suave
          }${
            shouldShowProfileImage ? "" : " mx-10"
          } max-w-xs break-words p-2 text-sm`}
        >
          {text}
        </p>
      </div>
    </div>
  );
}
export default ChatMessage;
