import React from 'react';
import styled, {css} from 'styled-components';

const PostContainer = styled.div`
    display: flex;
    align-items: stretch;
    width: 400px;
    border: 2px solid;
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

const Post = ({FullName, UserName, PostText, TastyCount, NotTastyCount, profileSrc, ratingSrc}) => {
    return  <PostContainer>
        <ImgCont>
            <UserImg src={profileSrc}/>
        </ImgCont>

        <PostBody>
            <NameCont>
                <Name>{FullName}</Name>
                <Username>@{UserName}</Username>
                {/* <Rating>[&bull;][&bull;][&bull;]</Rating> */}
                <Rating src={ratingSrc}/>
            </NameCont>

            <BodyText>{PostText}</BodyText>

            <LikeCont>
                <Like>
                    <IconCont><Icon src="/Tasty.svg"/>&nbsp;<Count>{TastyCount}</Count></IconCont>
                    Tasty
                </Like>
                <Like>
                    <IconCont><Icon src="/NotTasty.svg"/>&nbsp;<Count>{NotTastyCount}</Count></IconCont>
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
PostText:"NEW! Creamy Tomato Soup with Mascarpone Recipe is up and ready for dinner tonight! http://ow.ly/54ul50Dy9Br",
TastyCount:"123",
NotTastyCount:"45"
}

export default Post;