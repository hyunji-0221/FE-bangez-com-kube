'use client'

import React from 'react';
import { useUserStore } from "@/stores/useUserStore";
import { useRouter } from "next/navigation";
import { API } from "@/app/api/common/API";


const Test: React.FC = () => {

    const user = useUserStore((state) => state.user);
    const receiverId = 61
    const router = useRouter()

    console.log('user:', user?.id);
    console.log('receiverId:', receiverId);

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        console.log("Request Information button clicked", user?.id, receiverId);
        try {
          fetch(`${API.CHATSERVER}/open-room/${user?.id}/${receiverId}`, {
            method: 'POST',
            body: JSON.stringify({
              roomTitle:'매물 정보'
            }),
          }).then(res => {
            if (res.ok) {
              alert('채팅방 열기 성공')
              router.push('/dashboard-message')
            } else {
              alert('채팅방 열기 실패')
            }
          })
        } catch (error) {
          console.log('채팅방 열기 에러', error)
        }
      }

    return (
        <div className="btn-area mt20">
            <button onClick={handleClick} className="ud-btn btn-white2">
                Request Information <i className="fal fa-arrow-right-long" />
            </button>
        </div>
    );
}

export default Test;