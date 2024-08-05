"use client"
import Link from "next/link"
import React from "react"
import { usePathname } from "next/navigation"

const SidebarDashboard = () => {
  const pathname = usePathname()

  const sidebarItems = [
    {
      title: "MAIN",
      items: [
        {
          href: "/dashboard-home",
          icon: "flaticon-discovery",
          text: "Dashboard"
        },
        {
          href: "/dashboard-message",
          icon: "flaticon-chat-1",
          text: "1:1 문의 채팅"
        }
      ]
    },
    {
      title: "MANAGE LISTINGS",
      items: [
        {
          href: "/dashboard-add-property",
          icon: "flaticon-new-tab",
          text: "Add New Property"
        },
        {
          href: "/dashboard-my-properties",
          icon: "flaticon-home",
          text: "My Properties"
        },
        {
          href: "/dashboard-my-favourites",
          icon: "flaticon-like",
          text: "My Favorites"
        },
        {
          href: "/dashboard-saved-search",
          icon: "flaticon-search-2",
          text: "Saved Search"
        },
        // {
        //   href: "/dashboard-reviews",
        //   icon: "flaticon-review",
        //   text: "Reviews"
        // },
        {
          href: "/dashboard-chargePoint",
          icon: "flaticon-secure-payment",
          text: "포인트 충전"
        }
      ]
    },
    {
      title: "MANAGE ACCOUNT",
      items: [
        {
          href: "/dashboard-my-package",
          icon: "flaticon-protection",
          text: "My Package"
        },
        {
          href: "/dashboard-my-profile",
          icon: "flaticon-user",
          text: "My Profile"
        },
        {
          href: "/login",
          icon: "flaticon-logout",
          text: "Logout"
        }
      ]
    }
  ]

  return (
    <div className="dashboard__sidebar d-none d-lg-block">
      <div className="dashboard_sidebar_list">
        {sidebarItems.map((section, sectionIndex) => (
          <div key={sectionIndex}>
            <p
              className={`fz15 fw400 ff-heading ${
                sectionIndex === 0 ? "mt-0" : "mt30"
              }`}
            >
              {section.title}
            </p>
            {section.items.map((item, itemIndex) => (
              <div key={itemIndex} className="sidebar_list_item">
                <Link
                  href={item.href}
                  className={`items-center ${
                    pathname === item.href ? "-is-active" : ""
                  }`}
                >
                  <i className={`${item.icon} mr15`} />
                  {item.text}
                </Link>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export default SidebarDashboard
