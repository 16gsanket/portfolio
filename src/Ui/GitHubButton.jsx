function GitHubButton({children , link}) {
    return (
        <div className="bg-bk_black px-4 py-2 rounded-full border border-orange_text hover:cursor-pointer hover:bg-stone-300 hover:text-stone-800">
            <a href={link} target="_blank">

            {children}
            </a>
        </div>
    )
}

export default GitHubButton
