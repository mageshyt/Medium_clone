import {
  AiFillHome,
  AiOutlineHome,
  AiFillBell,
  AiOutlineBell,
} from 'react-icons/ai'
import { BsFillBookmarksFill, BsBookmarks } from 'react-icons/bs'
import { GrNotes } from 'react-icons/gr'
import { FaStickyNote } from 'react-icons/fa'
export const Icons = [
  {
    name: 'home',
    Icon: AiOutlineHome,
    Active: AiFillHome,
  },
  {
    name: 'bell',
    Icon: AiOutlineBell,
    Active: AiFillBell,
  },
  {
    name: 'bookmarks',
    Icon: BsBookmarks,
    Active: BsFillBookmarksFill,
  },
  {
    name: 'notes',
    Icon: GrNotes,
    Active: FaStickyNote,
  },
]
