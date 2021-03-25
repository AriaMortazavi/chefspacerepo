import React, {useState} from 'react';
import styled, {css} from 'styled-components';

const PostContainer = styled.div`
    display: flex;
    align-items: stretch;
    width: 100%;
    box-shadow: 0px 0.33px 0px #CED5DC;
    margin-top: 15px;
`;

const ImgCont = styled.div`
    background-color: #6495ed;
    margin: 5px;
    text-align: center;
    flex-grow: 1;
    width: 55px;
    height: 55px;
    border-radius: 50%;
`;

const UserImg = styled.img`
    width: 55px;
    height: 55px;
    overflow: hidden;
    border-radius: 50%;
`;

const PostBody = styled.div`
    margin: 5px;
    flex-grow: 8;
`;

const NameCont = styled.div`
    font-size: 16px;
`;

const Name = styled.span`
    font-weight: 700;
    line-height: 22px;
`;

const Username = styled.span`
    font-weight: 400;
    color: #687684;
    margin-left: 10px;
`;

const Rating = styled.img`
    width: 50px;
    margin-left: 10px;
`;

const BodyText = styled.div`
    font-weight: 400;
    font-size: 16px;
    margin-top: 5px;
`;

const PostImg = styled.img`
    width: 95%;
    border-radius: 24px;
    height: 120px;
    overflow: hidden;
    object-fit: cover;
    margin-top: 10px;
    border: none;
`;

const PostLink = styled.div`
    color: #00A2FD;
`;

const LikeCont = styled.div`
    display: flex;
    align-items: stretch;
    width: 100%;
    text-align: center;
    margin-top: 20px;
`;

const Like = styled.div`
    flex-grow: 1;
    font-weight: 400;
    line-height: 20px;
    color: #BC411B;
`;

const IconCont = styled.div`
`;

const Icon = styled.img`
    width: 25px;
`;

const Count = styled.span`
    font-size: 12px;
    margin-left: 5px;
`;

function handleTastyClicked(){
    console.log("Tasty Clicked!");
}

function handleNotTastyClicked(){
    console.log("Not Tasty Clicked!");
}

const Post = ({FullName, UserName, PostText, TastyCount, NotTastyCount, profileSrc, ratingSrc, postImgSrc, LinkUrl}) => {
    return  <PostContainer>
        <ImgCont>
            <UserImg src={profileSrc}/>
        </ImgCont>

        <PostBody>
            <NameCont>
                <Name>{FullName}</Name>
                <Username>@{UserName}</Username>
                <Rating src={ratingSrc}/>
            </NameCont>

            <BodyText>
                {PostText}
                <PostLink><a href={LinkUrl}>{LinkUrl}</a></PostLink>
                <PostImg src={postImgSrc}/>
            </BodyText>

            <LikeCont>
                <Like>
                    <IconCont onClick={handleTastyClicked}><Icon src="/Tasty.svg"/>&nbsp;<Count>{TastyCount}</Count></IconCont>
                    Tasty
                </Like>
                <Like>
                    <IconCont onClick={handleNotTastyClicked}><Icon src="/NotTasty.svg"/>&nbsp;<Count>{NotTastyCount}</Count></IconCont>
                    Not Tasty
                </Like>
            </LikeCont>
        </PostBody>
 </PostContainer>
 
}
Post.defaultProps = {
FullName:"John Appleseed",
UserName:"john123",
profileSrc:"profile.png",
ratingSrc:"hat3.svg",
PostText:"This post is really cool!",
LinkUrl:"",
postImgSrc:"",
TastyCount:"123",
NotTastyCount:"45"
}

export default Post;