import * as React from "react"
import styles from "./Back.module.scss"
import {BiArrowBack} from "react-icons/bi"
import {useContext} from "react"
import {siteContext} from "../../Context/SiteContext"
import {RiCloseCircleFill} from "react-icons/ri"
import {ICategory} from "../../types/ICategory"
import {ITag} from "../../types/ITag"

const Back = () => {
    const goHome = useContext(siteContext).goHome
    const siteState = useContext(siteContext).siteState
    const siteCategoryList = useContext(siteContext).siteCategoryList
    const siteTagList = useContext(siteContext).siteTagList
    const clearCategory = useContext(siteContext).clearCategory
    const clearTag = useContext(siteContext).clearTag
    const clearSearchPhrase = useContext(siteContext).clearSearchPhrase

    return (
        <div className={styles.back}>
            <div onClick={goHome} className={styles.back__container}>
                <div className={styles.back__iconWrapper}>
                    <BiArrowBack title="Go back"/>
                </div>
                <div className={styles.back__labelContainer}>
                    Go Home
                </div>
            </div>
            <div className={styles.back__infoContainer}>
                {!!siteState?.category &&
                    <div onClick={clearCategory} className={styles.back__info}>
                        Current category: {siteCategoryList?.find(
                        (category: ICategory) => category.id === siteState?.category).name} <RiCloseCircleFill/>
                    </div>
                }
                {!!siteState?.tag &&
                    <div onClick={clearTag} className={styles.back__info}>
                        Current tag: {siteTagList?.find((tag: ITag) =>
                        tag.id === siteState?.tag).name} <RiCloseCircleFill/>
                    </div>
                }
                {!!siteState?.search &&
                    <div onClick={clearSearchPhrase} className={styles.back__info}>
                        Current search: {siteState?.search} <RiCloseCircleFill/>
                    </div>
                }
                {!!siteState?.isSingleArticle &&
                    <div onClick={goHome} className={styles.back__info}>
                        Single article <RiCloseCircleFill/>
                    </div>
                }
            </div>
        </div>
    )
}

export default Back