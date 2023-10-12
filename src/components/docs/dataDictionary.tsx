"use client";
import { Card } from "../ui/card";

export default function DataDictionary() {

  return (
    <>
      <div className="col-span-4 md:col-span-3 overflow-y-auto">
        <div className="grid grid-cols-4 p-10">
          <div className="col-span-4 md:col-span-3">
            <div className="text-4xl font-extrabold mb-3">
              Data Dictionary
            </div>

            <div className="text-3xl font-extrabold mb-3 mt-20">
              Chain
            </div>
            <Card>
              <div className="flex flex-col">
                <div className="-m-1.5 overflow-x-auto">
                  <div className="p-1.5 min-w-full inline-block align-middle">
                    <div className="overflow-hidden">
                      <table className="min-w-full divide-y divide-gray-700">
                        <thead>
                          <tr>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase">Name</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase">Type</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase">Description</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-700">

                          <tr>
                            <td className="px-6 py-4 text-sm font-medium text-[#94949c]">chain</td>
                            <td className="px-6 py-4 text-sm text-[#94949c]">Array</td>
                            <td className="px-6 py-4 text-sm text-[#94949c]">Array of stages</td>
                            <td className="px-6 py-4 text-right text-sm font-medium">
                            </td>
                          </tr>

                          <tr>
                            <td className="px-6 py-4 text-sm font-medium text-[#94949c]">index_id</td>
                            <td className="px-6 py-4 text-sm text-[#94949c]">String</td>
                            <td className="px-6 py-4 text-sm text-[#94949c]">ID of the index this chain belongs to</td>
                            <td className="px-6 py-4 text-right text-sm font-medium">
                            </td>
                          </tr>

                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            <div className="text-3xl font-extrabold mb-3 mt-20">
              Source
            </div>
            <Card>
              <div className="flex flex-col">
                <div className="-m-1.5 overflow-x-auto">
                  <div className="p-1.5 min-w-full inline-block align-middle">
                    <div className="overflow-hidden">
                      <table className="min-w-full divide-y divide-gray-700">
                        <thead>
                          <tr>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase">Name</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase">Type</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase">Description</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-700">
                          <tr>
                            <td className="px-6 py-4 text-sm font-medium text-[#94949c]">contents</td>
                            <td className="px-6 py-4 text-sm text-[#94949c]">string</td>
                            <td className="px-6 py-4 text-sm text-[#94949c]">Text contents of the source</td>
                            <td className="px-6 py-4 text-right text-sm font-medium"></td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 text-sm font-medium text-[#94949c]">metadata</td>
                            <td className="px-6 py-4 text-sm text-[#94949c]">object</td>
                            <td className="px-6 py-4 text-sm text-[#94949c]">Metadata associated with the source</td>
                            <td className="px-6 py-4 text-right text-sm font-medium"></td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 text-sm font-medium text-[#94949c]">file_path</td>
                            <td className="px-6 py-4 text-sm text-[#94949c]">string</td>
                            <td className="px-6 py-4 text-sm text-[#94949c]">Original file path of the source</td>
                            <td className="px-6 py-4 text-right text-sm font-medium"></td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 text-sm font-medium text-[#94949c]">embedding</td>
                            <td className="px-6 py-4 text-sm text-[#94949c]">array</td>
                            <td className="px-6 py-4 text-sm text-[#94949c]">Embedding vector for the contents</td>
                            <td className="px-6 py-4 text-right text-sm font-medium"></td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 text-sm font-medium text-[#94949c]">index_id</td>
                            <td className="px-6 py-4 text-sm text-[#94949c]">string</td>
                            <td className="px-6 py-4 text-sm text-[#94949c]">ID of the index this source belongs to</td>
                            <td className="px-6 py-4 text-right text-sm font-medium"></td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 text-sm font-medium text-[#94949c]">source_id</td>
                            <td className="px-6 py-4 text-sm text-[#94949c]">string</td>
                            <td className="px-6 py-4 text-sm text-[#94949c]">Unique ID of this source</td>
                            <td className="px-6 py-4 text-right text-sm font-medium"></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            <div className="text-3xl font-extrabold mb-3 mt-20">
              Organization
            </div>
            <Card>
              <div className="flex flex-col">
                <div className="-m-1.5 overflow-x-auto">
                  <div className="p-1.5 min-w-full inline-block align-middle">
                    <div className="overflow-hidden">
                      <table className="min-w-full divide-y divide-gray-700">
                        <thead>
                          <tr>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase">Name</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase">Type</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase">Description</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-700">
                          <tr>
                            <td className="px-6 py-4 text-sm font-medium text-[#94949c]">org_id</td>
                            <td className="px-6 py-4 text-sm text-[#94949c]">String</td>
                            <td className="px-6 py-4 text-sm text-[#94949c]">Unique ID of the organization</td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 text-sm font-medium text-[#94949c]">metadata</td>
                            <td className="px-6 py-4 text-sm text-[#94949c]">Object</td>
                            <td className="px-6 py-4 text-sm text-[#94949c]">Additional metadata about the organization.</td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 text-sm font-medium text-[#94949c]">creation_date</td>
                            <td className="px-6 py-4 text-sm text-[#94949c]">DateTime</td>
                            <td className="px-6 py-4 text-sm text-[#94949c]">The date and time when the organization was created.</td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 text-sm font-medium text-[#94949c]">credits_remaining</td>
                            <td className="px-6 py-4 text-sm text-[#94949c]">Integer</td>
                            <td className="px-6 py-4 text-sm text-[#94949c]">The number of credits remaining for the organization.</td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 text-sm font-medium text-[#94949c]">users</td>
                            <td className="px-6 py-4 text-sm text-[#94949c]">List of User Objects</td>
                            <td className="px-6 py-4 text-sm text-[#94949c]">A list of user objects associated with the organization.</td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 text-sm font-medium text-[#94949c]">indexes</td>
                            <td className="px-6 py-4 text-sm text-[#94949c]">List of Strings</td>
                            <td className="px-6 py-4 text-sm text-[#94949c]">A list of index IDs associated with the organization.</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            <div className="text-3xl font-extrabold mb-3 mt-20">
              User (within Organization)
            </div>
            <Card>
              <div className="flex flex-col">
                <div className="-m-1.5 overflow-x-auto">
                  <div className="p-1.5 min-w-full inline-block align-middle">
                    <div className="overflow-hidden">
                      <table className="min-w-full divide-y divide-gray-700">
                        <thead>
                          <tr>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase">Name</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase">Type</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase">Description</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-700">
                          <tr>
                            <td className="px-6 py-4 text-sm font-medium text-[#94949c]">email</td>
                            <td className="px-6 py-4 text-sm text-[#94949c]">String</td>
                            <td className="px-6 py-4 text-sm text-[#94949c]">The email address of the user.</td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 text-sm font-medium text-[#94949c]">creation_date</td>
                            <td className="px-6 py-4 text-sm text-[#94949c]">DateTime</td>
                            <td className="px-6 py-4 text-sm text-[#94949c]">The date and time when the user was created.</td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 text-sm font-medium text-[#94949c]">api_keys</td>
                            <td className="px-6 py-4 text-sm text-[#94949c]">List of Strings</td>
                            <td className="px-6 py-4 text-sm text-[#94949c]">A list of API keys associated with the user.</td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 text-sm font-medium text-[#94949c]">indexes</td>
                            <td className="px-6 py-4 text-sm text-[#94949c]">List of Strings</td>
                            <td className="px-6 py-4 text-sm text-[#94949c]">A list of index IDs associated with the user.</td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 text-sm font-medium text-[#94949c]">metadata</td>
                            <td className="px-6 py-4 text-sm text-[#94949c]">Object</td>
                            <td className="px-6 py-4 text-sm text-[#94949c]">Additional metadata about the user.</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </Card>



          </div>
          {/* <div className="col-span-1">
          <div>On this page</div>
        </div> */}
        </div>
      </div>
    </>
  );
}