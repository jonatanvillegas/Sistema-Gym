import React, { useState } from 'react';
import {
  Home,
  CreditCard,
  Users,
  DollarSign,
  Calendar,
  Settings,
  LogOut,
} from 'lucide-react';
import styles from './Layout.module.css';

const Aside = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  // Configuración del menú dinámico
  const menuItems = [
    { id: 'home', label: 'Inicio', icon: Home },
    { id: 'analysis', label: 'Análisis de Tarjeta', icon: CreditCard },
    { id: 'members', label: 'Gestión de Miembros', icon: Users },
    { id: 'payments', label: 'Gestión de Pagos', icon: DollarSign },
    { id: 'visits', label: 'Gestión de Visitas', icon: Calendar },
    { id: 'settings', label: 'Configuración', icon: Settings },
  ];

  return (
    <aside className={styles.aside}>
      <hr className={styles.divider} />
      {/* Información del perfil */}
      <div className={styles.userProfile}>
        <Users size={40} />
        <div className={styles.userInfo}>
          <span className={styles.userName}>Jonathan Villegas</span>
          <span className={styles.userRole}>Administrador</span>
        </div>
      </div>

      {/* Menú de navegación */}
      <nav className={styles.navigation}>
        <ul className={styles.menu}>
          {menuItems.map((item) => (
            <li key={item.id}>
              <a
                href="#"
                className={`${styles.menuItem} ${
                  selectedItem === item.id ? styles.selected : ''
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  setSelectedItem(item.id);
                }}
              >
                <item.icon size={20} />
                <span>{item.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Aside;
