import React from 'react';
import { Link } from 'gatsby';

function NavPolicies() {
  return (
    <nav className="pt-8 p-5">
      <div className="mb-8">
        <h5 className="mb-3 lg:mb-2 uppercase font-bold text-sm lg:text-xs text-indigo-400">
          Policies
        </h5>

        <ul>
          <li className="mb-3 lg:mb-1">
            <Link
              className="text-gray-600 hover:text-gray-900 block py-1"
              activeClassName="text-gray-900"
              to="/policies/privacy/"
            >
              Privacy Policy
            </Link>

            <Link
              className="text-gray-600 hover:text-gray-900 block py-1"
              activeClassName="text-gray-900"
              to="/policies/terms/"
            >
              Terms of Service
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavPolicies;
